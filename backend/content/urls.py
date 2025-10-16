from django.urls import path
from .views import BannerAPIView,SpeltakAPIView,AgendaAPIView,ScoutingAppAPIView,HuurInfoAPIView,FooterAPIView


urlpatterns = [
    path('banner', BannerAPIView.as_view(), name='banner'),
    path('speltakken', SpeltakAPIView.as_view(), name='speltakken'),
    path('agenda', AgendaAPIView.as_view(), name='agenda'),
    path('scouting-app', ScoutingAppAPIView.as_view(), name='scouting-app'),
    path('verhuur', HuurInfoAPIView.as_view(), name='verhuur'),
    path('footer', FooterAPIView.as_view(), name='footer')
]
