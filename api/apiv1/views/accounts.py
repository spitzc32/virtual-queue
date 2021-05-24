from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import status
from rest_framework import generics

from ..serializers.accounts import AccountSerializer

from accounts.models import Account

class AccountRetrieveAPIView(generics.ListCreateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer


class AccountDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
