from core.models import Tweet, Profile
from .serializers import TweetSerializer, ProfilesSerializer, TweetPostSerializer
from django.contrib.auth.models import User
from django.http import Http404
from django.db.models import F
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


# class TweetDetail(APIView):

#     def post(self, request, format=None):
#         serializer = TweetSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfileList(APIView):

    def get(self, request, format=None):
        profiles = (
            Profile.objects.values("user__username", "id")
            .annotate(
                username=F("user__username"),
            )
            .all()
        )

        serializer = ProfilesSerializer(profiles, many=True)
        return Response(serializer.data)


class TweetsView(APIView):

    def get_object(self, pk):
        try:
            return Tweet.objects.annotate(
                username=F("user__username"),
                userid=F("user__id"),
            ).get(pk=pk)
        except Tweet.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        id_ = request.query_params.get("id")
        if id_:
            tweet = self.get_object(int(id_[0]))
            serializer = TweetSerializer(tweet)
            return Response(serializer.data)
        tweets = (
            Tweet.objects.annotate(username=F("user__username"), userid=F("user__id"))
            .order_by("-created_at")
            .all()
        )
        serializer = TweetSerializer(tweets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TweetPostSerializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.get(pk=serializer.data["userid"])
            tweet = Tweet(body=serializer.data["body"], user=user)
            tweet.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
