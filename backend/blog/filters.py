import django_filters
from .models import Product, FabricProduct, Service

import django_filters
from .models import *


class ProductFilter(django_filters.FilterSet):
    class Meta:
        model = Product
        fields = {
            'price': ['gte', 'lte'],
            'category': ['exact'],
        }
class FabricProductFilter(django_filters.FilterSet):
    # Filter for fabric_type (allow multiple selections)
    fabric_type = django_filters.ModelMultipleChoiceFilter(
        queryset=FabricType.objects.all(),
        widget=django_filters.widgets.CSVWidget,  # Handle multiple selections
    )
    
    # Filter for price range (as a tuple)
    price = django_filters.RangeFilter()

    class Meta:
        model = FabricProduct
        fields = ['fabric_type', 'price']

class ServiceFilter(django_filters.FilterSet):
    class Meta:
        model = Service
        fields = {
            'category': ['exact'],
            'price_start': ['gte', 'lte'],
        }

    price_start = django_filters.RangeFilter()
    name = django_filters.CharFilter(field_name='name', lookup_expr='icontains')
    description = django_filters.CharFilter(field_name='description', lookup_expr='icontains')
