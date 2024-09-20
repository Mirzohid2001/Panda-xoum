from django.shortcuts import render, get_object_or_404
from django.shortcuts import render, redirect
from django.urls import reverse
from django.http import HttpResponse
from django.urls import reverse_lazy
from django.views.decorators.cache import cache_page
from django.utils.decorators import method_decorator
from django.contrib import messages
from django.views.generic import CreateView, ListView
from django.http import JsonResponse
from .models import *
from .filters import ProductFilter, FabricProductFilter, ServiceFilter
from .forms import ContactFormForm, CallContactForm, SearchForm, FabricProductFilterForm, ProductFilterForm
from django.core.paginator import Paginator
from django.http import Http404

import django_filters


def home_view(request):
    services = ServiceCategory.objects.order_by('created_at').all()
    service_price = Service.objects.all()
    reviews = Review.objects.all()
    blogs = Blog.objects.all()

    context = {
        'services': services,
        'service_price': service_price,
        'reviews': reviews,
        'blogs': blogs
    }

    return render(request, 'base.html', context)


def paginate_queryset(queryset, request, page_size=10):
    paginator = Paginator(queryset, page_size)
    page_number = request.GET.get('page')
    return paginator.get_page(page_number)


@cache_page(60 * 15)
def banner_list_view(request):
    queryset = Banner.objects.all()
    context = {'banners': queryset}
    return render(request, 'your_template/banner_list.html', context)


@cache_page(60 * 15)
def category_product_list_view(request):
    queryset = CategoryProduct.objects.all()
    context = {'category_products': queryset}
    return render(request, 'your_template/category_product_list.html', context)


def product_list_view(request):
    queryset = Product.objects.all()
    filter_form = ProductFilterForm(request.GET or None)

    if filter_form.is_valid():
        categories = filter_form.cleaned_data.get('category')
        if categories:
            queryset = queryset.filter(category__in=categories)
        price_min = filter_form.cleaned_data.get('price_min')
        price_max = filter_form.cleaned_data.get('price_max')
        if price_min:
            queryset = queryset.filter(price__gte=price_min)
        if price_max:
            queryset = queryset.filter(price__lte=price_max)
    images = ProductImage.objects.filter(product__in=queryset)

    context = {
        'products': queryset,
        'filter_form': filter_form,
        'selected_categories': request.GET.getlist('category'),
        'selected_prices': request.GET.getlist('price'),
        'images': images,
    }

    return render(request, 'products.html', context)


def product_detail_view(request, pk):
    product = get_object_or_404(Product, pk=pk)
    images = ProductImage.objects.filter(product=product)
    context = {
        'product': product,
        'images': images,
    }
    return render(request, 'product_detail.html', context)


def fabric_detail_view(request, pk):
    fabric = get_object_or_404(FabricProduct, pk=pk)
    images = ImageForFabric.objects.filter(fabric=fabric)

    context = {'images': images, 'fabric': fabric}

    return render(request, 'fabric_detail.html', context)


@cache_page(60 * 15)
def blog_list_view(request):
    queryset = Blog.objects.all()
    context = {'blogs': queryset}
    return render(request, 'your_template/blog_list.html', context)


@cache_page(60 * 15)
def blog_detail_view(request, slug):
    blog = get_object_or_404(Blog, slug=slug)
    context = {'blog': blog}
    return render(request, 'your_template/blog_detail.html', context)


def review_list_view(request):
    queryset = Review.objects.all().order_by('-created_at')
    context = {'reviews': queryset}
    return render(request, 'reviews.html', context)


def location(request):
    return render(request, 'location.html')


# @cache_page(60 * 15)
# def fabric_type_list_view(request):
#     queryset = FabricType.objects.all()
#     context = {'fabric_types': queryset}
#     return render(request, 'your_template/fabric_type_list.html', context)


def fabrics(request):
    queryset = FabricProduct.objects.all()
    filter_form = FabricProductFilterForm(request.GET or None)

    if filter_form.is_valid():
        fabric_types = filter_form.cleaned_data.get('fabric_type')
        if fabric_types:
            queryset = queryset.filter(fabric_type__in=fabric_types)
        price_min = filter_form.cleaned_data.get('price_min')
        price_max = filter_form.cleaned_data.get('price_max')
        if price_min:
            queryset = queryset.filter(price__gte=price_min)
        if price_max:
            queryset = queryset.filter(price__lte=price_max)
    images = ImageForFabric.objects.filter(fabric__in=queryset)

    context = {
        'tkani': queryset,
        'filter_form': filter_form,
        'selected_fabric_types': request.GET.getlist('fabric_type'),
        'selected_prices': request.GET.getlist('price'),
        'images': images,
    }

    return render(request, 'fabrics.html', context)





def buy_fabric(request, pk):
    if request.method == 'POST':
        fabric = get_object_or_404(FabricProduct, pk=pk)
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        myquery = BuyFabric(fabric=fabric, name=name, phone=phone, email=email)
        myquery.save()
        messages.info(request, 'Запрос принят, мы скоро свяжемся с вами!')
        return redirect('home')


def buy_product(request, pk):
    if request.method == 'POST':
        product = Product.objects.get(pk=pk)
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        myquery = BuyProduct(product=product, name=name, phone=phone, email=email)
        myquery.save()
        messages.info(request, 'Запрос принять мы скоро свяжемся с вами !')

        return redirect('home')


def buy_service(request, pk):
    if request.method == 'POST':
        service = ServiceCategory.objects.get(pk=pk)
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        myquery = BuyService(service=service, name=name, phone=phone, email=email)
        myquery.save()
        messages.info(request, 'Запрос принять мы скоро свяжемся с вами !')

        return redirect('home')


def portfolio(request):
    queryset = Portfolio.objects.all().order_by('-created_at')
    paginated_queryset = paginate_queryset(queryset, request)
    images = PortFolioImage.objects.all()
    context = {'portfolios': paginated_queryset, 'images': images}
    return render(request, 'portfolio.html', context)


@cache_page(60 * 15)
def service_category_list_view(request):
    queryset = ServiceCategory.objects.all()
    context = {'service_categories': queryset}
    return render(request, 'your_template/service_category_list.html', context)


def service_list_view(request):
    queryset = ServiceCategory.objects.all()
    context = {'services': queryset}
    return render(request, 'services.html', context)


def service_detail_view(request, pk):
    try:
        service = get_object_or_404(ServiceCategory, pk=pk)
    except ServiceCategory.DoesNotExist:
        raise Http404("ServiceCategory with this ID does not exist.")

    reviews = Review.objects.all()
    prices = Service.objects.filter(category=service)

    context = {'service': service, 'prices': prices, 'reviews': reviews}
    return render(request, 'service_detail.html', context)


@cache_page(60 * 15)
def faq_list_view(request):
    queryset = FAQ.objects.all()
    context = {'faqs': queryset}
    return render(request, 'your_template/faq_list.html', context)


@cache_page(60 * 15)
def guide_list_view(request):
    queryset = Guide.objects.all()
    context = {'guides': queryset}
    return render(request, 'your_template/guide_list.html', context)


@cache_page(60 * 15)
def rating_list_view(request):
    queryset = Rating.objects.all().order_by('-rating')
    context = {'ratings': queryset}
    return render(request, 'your_template/rating_list.html', context)


@cache_page(60 * 15)
def ad_banner_list_view(request):
    queryset = AdBanner.objects.all()
    context = {'ad_banners': queryset}
    return render(request, 'your_template/ad_banner_list.html', context)


@cache_page(60 * 15)
def product_comparison_view(request):
    product_ids = request.GET.getlist('ids')
    products = Product.objects.filter(id__in=product_ids)
    context = {'products': products}
    return render(request, 'your_template/product_comparison.html', context)


@cache_page(60 * 15)
def fabric_product_comparison_view(request):
    fabric_ids = request.GET.getlist('fabric_ids')
    fabrics = FabricProduct.objects.filter(id__in=fabric_ids)
    context = {'fabrics': fabrics}
    return render(request, 'your_template/fabric_comparison.html', context)


@cache_page(60 * 15)
def worker_list_view(request):
    queryset = Worker.objects.all()
    context = {'workers': queryset}
    return render(request, 'your_template/worker_list.html', context)


def submit_question(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        question = request.POST.get('question')

        errors = {}
        if not name:
            errors['name'] = 'Введите ваше имя.'
        if not phone:
            errors['phone'] = 'Введите ваш номер телефона.'
        if not question:
            errors['question'] = 'Введите ваш вопрос.'

        if errors:
            return JsonResponse({'errors': errors}, status=400)

        ContactForm.objects.create(name=name, phone=phone, question=question)

        return JsonResponse({'message': 'Ваш вопрос был отправлен!'}, status=200)

    return JsonResponse({'error': 'Invalid request'}, status=400)


class ContactFormView(CreateView):
    model = ContactForm
    form_class = ContactFormForm
    template_name = 'contact_form.html'
    success_url = reverse_lazy('contact_success')


class CallContactView(CreateView):
    model = CallContact
    form_class = CallContactForm
    template_name = 'service_detail.html'
    success_url = reverse_lazy('home')


class SearchResultsView(ListView):
    model = Product
    template_name = 'search_results.html'
    context_object_name = 'results'
    form_class = SearchForm

    def get_queryset(self):
        query = self.request.GET.get('query')
        object_list = Product.objects.filter(title__icontains=query) | Blog.objects.filter(title__icontains=query)
        return object_list

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form'] = self.form_class(self.request.GET)
        return context


class ProductListView(ListView):
    model = Product
    template_name = 'product_list.html'
    context_object_name = 'products'

    def get_queryset(self):
        queryset = super().get_queryset()
        self.filterset = ProductFilter(self.request.GET, queryset=queryset)
        return self.filterset.qs

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['filterset'] = self.filterset
        return context


class FabricProductListView(ListView):
    model = FabricProduct
    template_name = 'fabric_list.html'
    context_object_name = 'fabrics'

    def get_queryset(self):
        queryset = super().get_queryset()
        self.filterset = FabricProductFilter(self.request.GET, queryset=queryset)
        return self.filterset.qs

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['filterset'] = self.filterset
        return context
