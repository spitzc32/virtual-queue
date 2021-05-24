# Generated by Django 2.0.1 on 2021-05-23 11:23

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('associates', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='storebranch',
            name='branch_rep',
        ),
        migrations.AddField(
            model_name='storebranch',
            name='workers',
            field=models.ManyToManyField(through='associates.AccountStoreBranch', to=settings.AUTH_USER_MODEL),
        ),
    ]