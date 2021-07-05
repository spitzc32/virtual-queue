from django.db import models
from django.conf import settings

from core.models import BaseModel
from store.models import StoreBranch
from accounts.models import Account


class AccountStoreBranch(BaseModel):
	store_branch = models.ForeignKey(to=StoreBranch, on_delete=models.CASCADE)
	account = models.ForeignKey(to=Account, on_delete=models.CASCADE)


class BranchOpening(BaseModel):
    store_branch = models.ForeignKey(to=StoreBranch, on_delete=models.CASCADE)
    opening_hour = models.IntegerField(default=0)
    closing_hour = models.IntegerField(default=0)
    num_of_workers = models.IntegerField(default=0)
    max_customers = models.IntegerField(default=0)
    min_customers = models.IntegerField(default=0)
    workers = models.ManyToManyField(
        AccountStoreBranch
    )
