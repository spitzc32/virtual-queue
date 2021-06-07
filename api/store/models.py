from core.models import BaseModel
from accounts.models import Account

from django.db import models
from django.conf import settings

class Store(BaseModel):
    """
    Store Model for our second entity, the store which customers will order from.

    Inherited
    ---------
        BaseModel : class obj
            Model intended for basic specification details
	
    """
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=1000)
    website_url = models.CharField(max_length=500)
    default_opening_hours = models.CharField(max_length=50)

    store_rep = models.ForeignKey(to=Account, on_delete=models.CASCADE)
    has_branch = models.BooleanField(default=False)

    def __str__(self):
        return "{}".format(self.name)

class StoreBranch(BaseModel):
    """
    Branch model for store entity used as the base for getting their primary
    adress and model to be assigned which branch the user will order through.

    Usecase
    -------
        IF user has one branch
            THEN user has default main branch
        ELSE
            THEN user has default main branch and other location branches
	
    Extends
    -------
        Store : class obj
            Second Entity our website has

    Inherited
    ---------
    BaseModel : class obj
        Model intended for basic specification details
    """
    branch = models.CharField(max_length=100, default="main")
    address = models.CharField(max_length=500)
    city = models.CharField(max_length=50)
    state_province = models.CharField(max_length=80)
    country= models.CharField(max_length=50)

    store = models.ForeignKey(to=Store, on_delete=models.CASCADE)
    workers = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        through='associates.AccountStoreBranch',
        through_fields=('store_branch', 'account')
    )

    def __str__(self):
        return "{} - {}".format(self.store.name, self.branch)

