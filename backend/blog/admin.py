from django.contrib import admin
from .models import *

@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'updated_at')
    search_fields = ('title',)
    list_filter = ('created_at',)


@admin.register(CategoryProduct)
class CategoryProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'updated_at')
    search_fields = ('title',)
    list_filter = ('created_at',)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'created_at')
    search_fields = ('title', 'text')
    list_filter = ('created_at', 'price')


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ('product', 'image', 'created_at')
    search_fields = ('product__title',)


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title', 'text')
    list_filter = ('created_at',)


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at')
    search_fields = ('name', 'text')
    list_filter = ('created_at',)


@admin.register(FabricType)
class FabricTypeAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


@admin.register(FabricProduct)
class FabricProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'fabric_type', 'created_at')
    search_fields = ('name', 'description')
    list_filter = ('fabric_type', 'created_at', 'price')


@admin.register(BuyFabric)
class BuyFabricAdmin(admin.ModelAdmin):
    list_display = ('fabric', 'name', 'phone', 'created_at')
    list_filter = ('fabric__name', 'created_at')




@admin.register(BuyProduct)
class BuyProductAdmin(admin.ModelAdmin):
    list_display = ('product__title', 'name', 'phone', 'created_at')
    list_filter = ('product', 'created_at')





@admin.register(BuyService)
class BuyServiceAdmin(admin.ModelAdmin):
    list_display = ('service__name', 'name', 'phone', 'created_at')
    list_filter = ('service', 'created_at')




@admin.register(ImageForFabric)
class ImageForFabricAdmin(admin.ModelAdmin):
    list_display = ('fabric', 'image', 'created_at')
    search_fields = ('fabric__name',)


@admin.register(Portfolio)
class PortfolioAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title', 'text')
    list_filter = ('created_at',)


@admin.register(PortFolioImage)
class PortFolioImageAdmin(admin.ModelAdmin):
    list_display = ('portfolio', 'image', 'created_at')
    search_fields = ('portfolio__title',)


@admin.register(ServiceCategory)
class ServiceCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at')
    search_fields = ('name',)
    list_filter = ('created_at',)


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'price_start', 'created_at')
    search_fields = ('name', 'description')
    list_filter = ('category', 'created_at', 'price_start')


@admin.register(ServiceImage)
class ServiceImageAdmin(admin.ModelAdmin):
    list_display = ('service', 'image', 'created_at')
    search_fields = ('service__name',)


@admin.register(BeforeAfterImage)
class BeforeAfterImageAdmin(admin.ModelAdmin):
    list_display = ('image', 'created_at')
    list_filter = ('created_at',)


@admin.register(ContactForm)
class ContactFormAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'created_at')
    search_fields = ('name', 'phone', 'question')
    list_filter = ('created_at',)


@admin.register(CallContact)
class CallContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'created_at')
    search_fields = ('name', 'phone')
    list_filter = ('created_at',)
