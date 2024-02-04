from rest_framework import serializers
from core import models as core_models


class TweetSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    userid = serializers.IntegerField()

    class Meta:
        model = core_models.Tweet
        fields = ["id", "username", "body", "userid", "created_at"]
        read_only_fields = ["id", "username", "userid", "body", "created_at"]


class TweetPostSerializer(serializers.ModelSerializer):
    userid = serializers.IntegerField()

    class Meta:
        model = core_models.Tweet
        fields = ["body", "userid"]


class ProfileSerializerWithoutFollows(serializers.ModelSerializer):
    username = serializers.CharField()

    class Meta:
        model = core_models.Profile
        fields = ["id", "username"]


class ProfilesSerializer(serializers.ModelSerializer):
    username = serializers.CharField()

    class Meta:
        model = core_models.Profile
        fields = ["id", "username"]
