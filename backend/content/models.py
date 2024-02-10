from django.db import models


class Banner(models.Model):
    main_text = models.CharField(max_length=80)
    button_label = models.CharField(max_length=40)
    background_image = models.ImageField

class Speltak(models.Model):
    name = models.CharField(max_length=50)
    age_range = models.CharField(max_length=20)
    thumbnail = models.ImageField
    show_on_homepage = models.BooleanField
    gender_info = models.CharField(max_length=1000)
    age_info = models.CharField(max_length=1000)
    activity_list = models.CharField(max_length=1000)
    gathering_times_info = models.CharField(max_length=1000)
    contribution_info = models.CharField(max_length=1000)

class LeidingLid(models.Model):
    name = models.CharField(max_length=50)
    role = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    phone_number = models.CharField(max_length=12)
