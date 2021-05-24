from django.db import models

from core.models import BaseModel
from store.models import StoreBranch
from accounts.models import Account


class AccountStoreBranch(BaseModel):
	store_branch = models.ForeignKey(to=StoreBranch, on_delete=models.CASCADE)
	account = models.ForeignKey(to=Account, on_delete=models.CASCADE)

	