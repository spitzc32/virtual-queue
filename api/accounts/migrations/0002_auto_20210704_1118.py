# Generated by Django 2.0.1 on 2021-07-04 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='large_estimate',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='medium_estimate',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='small_estimate',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
