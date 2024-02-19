from rest_framework import serializers
from .models import Banner,LeidingLid


class BannerSerializer(serializers.ModelSerializer):

    class Meta:
        model=Banner
        fields='__all__'


class LeidingLidSerializer(serializers.ModelSerializer):

    class Meta:
        model=LeidingLid
        fields='__all__'
