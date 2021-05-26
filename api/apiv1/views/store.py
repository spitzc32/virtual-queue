from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import status
from rest_framework import generics

from ..serializers.store import (
	StoreSerializer, 
	StoreBranchSerializer, 
	AccountBranchSerializer
)

from store.models import (
	Store,
	StoreBranch
)

class StoreRetrieveAPIView(generics.ListCreateAPIView):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer


class StoreDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer


class StoreBranchRetrieveAPIView(generics.ListCreateAPIView):
    queryset = StoreBranch.objects.all()
    serializer_class = StoreBranchSerializer


class StoreBranchDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = StoreBranch.objects.all()
    serializer_class = StoreBranchSerializer


class AccountBranchRetrieveAPIView(generics.ListCreateAPIView):
    queryset = StoreBranch.objects.all()
    serializer_class = AccountBranchSerializer


class AccountBranchDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = StoreBranch.objects.all()
    serializer_class = AccountBranchSerializer
