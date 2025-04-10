from django.contrib import admin
from .models import Banner, Speltak, LeidingLid, AgendaItem, ScoutingAppInfo, HuurInfo, Footer


class BannerAdmin(admin.ModelAdmin):
    list_display = ('main_text', 'button_label')

class SpeltakAdmin(admin.ModelAdmin):
    list_display = ('name', 'age_range')

class LeidingLidAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'email', 'phone_number')

class AgendaItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'date')

class ScoutingAppInfoAdmin(admin.ModelAdmin):
    list_display = ('title',)

class HuurInfoAdmin(admin.ModelAdmin):
    list_display = ('title',)

class FooterAdmin(admin.ModelAdmin):
    list_display = ('social_media_title', 'contact_verhuur_title', 'vrienden_title', 'documenten_title')


admin.site.register(Banner, BannerAdmin)
admin.site.register(Speltak, SpeltakAdmin)
admin.site.register(LeidingLid, LeidingLidAdmin)
admin.site.register(AgendaItem, AgendaItemAdmin)
admin.site.register(ScoutingAppInfo, ScoutingAppInfoAdmin)
admin.site.register(HuurInfo, HuurInfoAdmin)
admin.site.register(Footer, FooterAdmin)
