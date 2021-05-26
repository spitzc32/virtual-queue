from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import status
from rest_framework import generics

from ..serializers.store import (
	StoreSerializer, 
	StoreBranchSerializer, 
	AccountBranchSerializer
)

# TODO: make a class of these 3 serializers above and test them
# after that delete this comment (@Joseph)



