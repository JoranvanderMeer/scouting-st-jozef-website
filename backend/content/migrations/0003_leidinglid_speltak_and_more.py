# Generated by Django 4.2.7 on 2024-02-09 10:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0002_rename_bannercontent_banner'),
    ]

    operations = [
        migrations.CreateModel(
            name='LeidingLid',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('role', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=50)),
                ('phone_number', models.CharField(max_length=12)),
            ],
        ),
        migrations.CreateModel(
            name='Speltak',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('age_range', models.CharField(max_length=20)),
                ('gender_info', models.CharField(max_length=1000)),
                ('age_info', models.CharField(max_length=1000)),
                ('activity_list', models.CharField(max_length=1000)),
                ('gathering_times_info', models.CharField(max_length=1000)),
                ('contribution_info', models.CharField(max_length=1000)),
            ],
        ),
        migrations.RemoveField(
            model_name='banner',
            name='background_image_url',
        ),
    ]
