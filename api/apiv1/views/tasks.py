from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import status
from rest_framework import generics

from ..serializers.tasks import StoreTaskSerializer

from tasks.models import StoreTask

class StoreTaskRetrieveAPIView(generics.ListCreateAPIView):
	queryset = StoreTask.objects.all()
	serializer_class = StoreTaskSerializer


class StoreTaskDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = StoreTask.objects.all()
    serializer_class = StoreTaskSerializer