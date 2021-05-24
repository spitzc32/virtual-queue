from django.contrib.auth.models import UserManager, Group


class UserManager(UserManager):

    def create_user(self, email, password, first_name="",
     last_name="", preferred_name="", group = "User",
     is_admin=False, is_staff=False, is_active=True):

        if not email:
            raise ValueError("User must have mail")
        if not password:
            raise ValueError("User must have a password")

        user = self.model(
            email=self.normalize_email(email)
        )

        user.email = email
        user.set_password(password)
        user.is_admin = is_admin
        user.is_staff = is_staff
        user.is_active = is_active

        if first_name:
            user.first_name = first_name
        if last_name:
            user.last_name = last_name
        if preferred_name:
            user.preferred_name = preferred_name 

        groups = Group.objects.filter(name=group).first()
        user.groups.set(groups)
        user.save()
        return user

    def create_staff_user(self, email, password, 
        preferred_name="", first_name="",
        last_name=""):
        user = self.create_user(
            email,
            password=password,
            first_name=first_name,
            last_name=last_name,
            preferred_name=preferred_name,
            is_staff=True,
            group="Admin"
        )
        return user

    def create_superuser(self, email, password):
        user = self.create_user(
            email,
            password=password,
            is_staff=True,
            is_admin=True, 
            group="Admin"
        )
        return user
