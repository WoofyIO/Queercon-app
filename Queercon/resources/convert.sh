#
# This will create the correct icon files, using imagemagick 
#



#            ldpi    : 36x36 px
#            mdpi    : 48x48 px
#            hdpi    : 72x72 px
#            xhdpi   : 96x96 px
#            xxhdpi  : 144x144 px
#            xxxhdpi : 192x192 px


convert app_logo_android.png -resize 36x36 android/icon/ldpi.png
convert app_logo_android.png -resize 48x48 android/icon/mdpi.png
convert app_logo_android.png -resize 72x72 android/icon/hdpi.png
convert app_logo_android.png -resize 96x96 android/icon/xhdpi.png
convert app_logo_android.png -resize 144x144 android/icon/xxhdpi.png
convert app_logo_android.png -resize 192x192 android/icon/xxxhdpi.png


convert app_logo_ios.png -resize 180x180 ios/icon/icon-60@3x.png
convert app_logo_ios.png -resize 60x60 ios/icon/icon-60.png
convert app_logo_ios.png -resize 120x120 ios/icon/icon-60@2x.png
convert app_logo_ios.png -resize 76x76 ios/icon/icon-76.png
convert app_logo_ios.png -resize 152x152 ios/icon/icon-76@2x.png
convert app_logo_ios.png -resize 40x40 ios/icon/icon-40.png
convert app_logo_ios.png -resize 80x80 ios/icon/icon-40@2x.png
convert app_logo_ios.png -resize 57x57 ios/icon/icon.png
convert app_logo_ios.png -resize 114x114 ios/icon/icon@2x.png
convert app_logo_ios.png -resize 72x72 ios/icon/icon-72.png
convert app_logo_ios.png -resize 144x144 ios/icon/icon-72@2x.png
convert app_logo_ios.png -resize 167x167 ios/icon/icon-167.png
convert app_logo_ios.png -resize 29x29 ios/icon/icon-small.png
convert app_logo_ios.png -resize 58x58 ios/icon/icon-small@2x.png
convert app_logo_ios.png -resize 50x50 ios/icon/icon-50.png
convert app_logo_ios.png -resize 100x100 ios/icon/icon-50@2x.png
convert app_logo_ios.png -resize 167x167 ios/icon/icon-83.5@2x.png
convert app_logo_ios.png -resize 87x87 ios/icon/icon-small@3x.png
convert app_logo_ios.png -resize 1024x1024 ios/icon/icon-1024.png
convert app_logo_ios.png -resize 120x120 ios/icon/icon-40@3x.png

