from django import forms
from .models import ContactForm, CallContact, FabricType, FabricProduct, CategoryProduct


class ContactFormForm(forms.ModelForm):
    class Meta:
        model = ContactForm
        fields = ['name', 'phone', 'question']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Ismingizni kiriting'}),
            'phone': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Telefon raqamingizni kiriting'}),
            'question': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Savolingizni kiriting'}),
        }


class CallContactForm(forms.ModelForm):
    class Meta:
        model = CallContact
        fields = ['name', 'phone']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Ismingizni kiriting'}),
            'phone': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Telefon raqamingizni kiriting'}),
        }


class SearchForm(forms.Form):
    query = forms.CharField(
        max_length=255,
        label='Поиск',
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Введите запрос...'})
    )


class FabricProductFilterForm(forms.Form):
    fabric_type = forms.ModelMultipleChoiceField(
        queryset=FabricType.objects.all(),
        required=False,
        widget=forms.CheckboxSelectMultiple
    )

    price_min = forms.DecimalField(required=False, min_value=0, label='Минимальная цена')
    price_max = forms.DecimalField(required=False, min_value=0, label='Максимальная цена')

class ProductFilterForm(forms.Form):
    category = forms.ModelMultipleChoiceField(
        queryset=CategoryProduct.objects.all(),
        required=False,
        widget=forms.CheckboxSelectMultiple
    )

    price_min = forms.DecimalField(required=False, min_value=0, label='Минимальная цена')
    price_max = forms.DecimalField(required=False, min_value=0, label='Максимальная цена')

