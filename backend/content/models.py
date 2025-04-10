import django
from django.db import models


class Banner(models.Model):
    main_text = models.CharField(max_length=80)
    button_label = models.CharField(max_length=50)
    background_image = models.ImageField

class Speltak(models.Model):
    name = models.CharField(max_length=50)
    age_range = models.CharField(max_length=20)
    thumbnail = models.ImageField
    gender_info = models.CharField(max_length=1000)
    age_info = models.CharField(max_length=1000)
    activity_list = models.CharField(max_length=1000)
    gathering_times_info = models.CharField(max_length=1000)
    contribution_info = models.CharField(max_length=1000)

    def __str__(self):
        return self.name

class LeidingLid(models.Model):
    name = models.CharField(max_length=50)
    role = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    phone_number = models.CharField(max_length=12)

    def __str__(self):
        return self.name

class AgendaItem(models.Model):
    name = models.CharField(max_length=50)
    date = models.DateField(default=django.utils.timezone.now, auto_now=False, auto_now_add=False)
    involved_speltakken = models.ManyToManyField(Speltak)

    def __str__(self):
        return self.name

class ScoutingAppInfo(models.Model):
    title = models.CharField(max_length=50)
    image = models.ImageField
    image_caption = models.CharField(max_length=100)
    paragraph_text = models.CharField(max_length=1000)
    button_label = models.CharField(max_length=50)

class HuurInfo(models.Model):
    title = models.CharField(max_length=50)
    image1 = models.ImageField
    image2 = models.ImageField
    image3 = models.ImageField
    paragraph_text = models.CharField(max_length=1000)
    button_label = models.CharField(max_length=50)

class Footer(models.Model):
    social_media_title = models.CharField(max_length=50)
    social_media_paragraph_text = models.CharField(max_length=1000)
    facebook_button_label = models.CharField(max_length=50)
    facebook_button_link = models.URLField
    instagram_button_label = models.CharField(max_length=50)
    instagram_button_link = models.URLField
    contact_verhuur_title = models.CharField(max_length=50)
    contact_verhuur_paragraph_text = models.CharField(max_length=1000)
    contact_button_label = models.CharField(max_length=50)
    verhuur_button_label = models.CharField(max_length=50)
    vrienden_title = models.CharField(max_length=50)
    vrienden_paragraph_text = models.CharField(max_length=1000)
    vrienden_button_label = models.CharField(max_length=50)
    documenten_title = models.CharField(max_length=50)
    huishoudelijk_regelement_button_label = models.CharField(max_length=50)
    huishoudelijk_regelement = models.FileField
    privacybeleid_button_label = models.CharField(max_length=50)