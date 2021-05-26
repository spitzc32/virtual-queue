from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import status
from rest_framework import generics

from ..serializers.orders import OrderSerializer

from orders.models import Order

class OrderRetrieveAPIView(generics.ListCreateAPIView):
	queryset = Order.objects.all()
	serializer_class = OrderSerializer


class OrderDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer