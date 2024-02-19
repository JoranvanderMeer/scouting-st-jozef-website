from django.urls import path
from .views import ContentAPIView


urlpatterns = [
    path('content', ContentAPIView.as_view(), name='content'),
]
