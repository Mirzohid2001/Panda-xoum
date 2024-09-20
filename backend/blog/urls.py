from django.urls import path
from .views import *

urlpatterns = [
    path('', home_view, name='home'),
    path('banners/', banner_list_view, name='banner_list'),
    path('category-products/', category_product_list_view, name='category_product_list'),
    path('products/', product_list_view, name='products'),
    path('product/<int:pk>/', product_detail_view, name='product'),
    path('fabric/<int:pk>/', fabric_detail_view, name='fabric'),
    path('blogs/', blog_list_view, name='blog_list'),
    path('blogs/<slug:slug>/', blog_detail_view, name='blog_detail'),
    path('reviews/', review_list_view, name='reviews'),
    path('fabrics/', fabrics, name='fabrics'),
    path('portfolio/', portfolio, name='portfolio'),
    path('service-categories/', service_category_list_view, name='service_category_list'),
    path('services/', service_list_view, name='services'),
    path('service/<int:pk>/', service_detail_view, name='service_detail'),
    path('faqs/', faq_list_view, name='faq_list'),
    path('guides/', guide_list_view, name='guide_list'),
    path('ratings/', rating_list_view, name='rating_list'),
    path('ad-banners/', ad_banner_list_view, name='ad_banner_list'),
    path('compare-products/', product_comparison_view, name='product_comparison'),
    path('compare-fabrics/', fabric_product_comparison_view, name='fabric_comparison'),
    path('workers/', worker_list_view, name='worker_list'),
    path('contact/', ContactFormView.as_view(), name='contact_form'),
    path('call-contact/', CallContactView.as_view(), name='call_contact_form'),
    path('search/', SearchResultsView.as_view(), name='search_results'),
    path('product-list/', ProductListView.as_view(), name='product_list_class'),
    path('fabric-list/', FabricProductListView.as_view(), name='fabric_list_class'),
    path('submit-question/', submit_question, name='submit_question'),
    path('location', location, name='location'),
    path('buy_fabric/<int:pk>', buy_fabric, name='buy_fabric'),
    path('buy_product/<int:pk>', buy_product, name='buy_product'),
    path('buy_service/<int:pk>', buy_service, name='buy_service')
]





