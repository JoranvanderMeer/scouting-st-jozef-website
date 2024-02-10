from django.contrib import admin
from .models import Banner, Speltak, LeidingLid


class BannerAdmin(admin.ModelAdmin):
    list_display = ('main_text', 'button_label')

class SpeltakAdmin(admin.ModelAdmin):
    list_display = ('name', 'age_range', 'show_on_homepage')

class LeidingLidAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'email', 'phone_number')


admin.site.register(Banner, BannerAdmin)
admin.site.register(Speltak, SpeltakAdmin)
admin.site.register(LeidingLid, LeidingLidAdmin)
