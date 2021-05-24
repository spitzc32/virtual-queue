from .models import Account
from django import forms
from django.core.exceptions import ValidationError


class CustomUserCreationForm(forms.ModelForm):
    first_name = forms.CharField(label='Enter First Name', min_length=4, max_length=150)
    last_name = forms.CharField(label='Enter Last Name', min_length=4, max_length=150)
    preferred_name = forms.CharField(label='Enter Preferred Name', min_length=4, max_length=150)
    email = forms.EmailField(label='Enter email')
    password = forms.CharField(label='Enter password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Confirm password', widget=forms.PasswordInput)

    class Meta:
        model = Account
        fields = [
            'first_name', 
            'last_name', 
            'preferred_name',
            'email',
            'password']

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super(CustomUserCreationForm, self).save(commit=False)
        user.set_password(self.cleaned_data["password"])
        if commit:
            user.save()
        return user

    def clean_email(self):
        email = self.cleaned_data['email'].lower()
        r = Account.objects.filter(email=email)
        if r.count():
            raise  ValidationError("Email already exists")
        return email

    def clean_password2(self):
        password = self.cleaned_data.get('password')
        password2 = self.cleaned_data.get('password2')

        if password and password2 and password != password2:
            raise ValidationError("Password don't match")

        return password2
