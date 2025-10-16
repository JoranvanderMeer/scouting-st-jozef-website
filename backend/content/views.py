from rest_framework import generics
from .models import Banner,Speltak,AgendaItem,ScoutingAppInfo,HuurInfo,Footer
from .serializers import BannerSerializer,SpeltakSerializer,AgendaItemSerializer,ScoutingAppInfoSerializer,FooterSerializer


class BannerAPIView(generics.ListAPIView):
    serializer_class = BannerSerializer

    def get_queryset(self):
        return Banner.objects.all()
    
class SpeltakAPIView(generics.ListAPIView):
    serializer_class = SpeltakSerializer

    def get_queryset(self):
        return Speltak.objects.all()
    
class AgendaAPIView(generics.ListAPIView):
    serializer_class = AgendaItemSerializer

    def get_queryset(self):
        return AgendaItem.objects.all()
    
class ScoutingAppAPIView(generics.ListAPIView):
    serializer_class = ScoutingAppInfoSerializer

    def get_queryset(self):
        return ScoutingAppInfo.objects.all()
    
class HuurInfoAPIView(generics.ListAPIView):
    serializer_class = ScoutingAppInfoSerializer

    def get_queryset(self):
        return HuurInfo.objects.all()

class FooterAPIView(generics.ListAPIView):
    serializer_class = FooterSerializer

    def get_queryset(self):
        return Footer.objects.all()
