from django.urls import include, path
from django.views.generic import TemplateView
from api import views

urlpatterns = [
    path("api/", include("rest_framework.urls", namespace="rest_framework")),
    path("tweets", views.TweetsView.as_view()),
    path("profiles/", views.ProfileList.as_view()),
]
