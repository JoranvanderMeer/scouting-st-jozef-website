from django.shortcuts import render
from rest_framework import generics
from .models import Banner
from .serializers import BannerSerializer,LeidingLidSerializer


class ContentAPIView(generics.ListAPIView):
    serializer_class = BannerSerializer

    def get_queryset(self):
        return Banner.objects.all()
