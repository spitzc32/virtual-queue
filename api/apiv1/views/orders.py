from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import status
from rest_framework import generics

from ..serializers.orders import OrderSerializer


# TODO: DO a class that does CRUD operations under Order Serializer
# after that, delete this comment (@Jan)
