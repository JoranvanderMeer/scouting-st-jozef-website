from rest_framework import serializers
from .models import Banner,Speltak,LeidingLid,AgendaItem,ScoutingAppInfo,HuurInfo,Footer


class BannerSerializer(serializers.ModelSerializer):

    class Meta:
        model=Banner
        fields='__all__'


class SpeltakSerializer(serializers.ModelSerializer):

    class Meta:
        model=Speltak
        fields='__all__'


class LeidingLidSerializer(serializers.ModelSerializer):

    class Meta:
        model=LeidingLid
        fields='__all__'


class AgendaItemSerializer(serializers.ModelSerializer):

    class Meta:
        model=AgendaItem
        fields='__all__'


class ScoutingAppInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model=ScoutingAppInfo
        fields='__all__'


class HuurInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model=HuurInfo
        fields='__all__'


class FooterSerializer(serializers.ModelSerializer):

    class Meta:
        model=Footer
        fields='__all__'