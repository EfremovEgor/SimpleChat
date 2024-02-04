from django.urls import include, path
from django.views.generic import TemplateView
from api import views

urlpatterns = [
    path("tweets", views.TweetsView.as_view()),
    path("profiles/", views.ProfileList.as_view()),
]
