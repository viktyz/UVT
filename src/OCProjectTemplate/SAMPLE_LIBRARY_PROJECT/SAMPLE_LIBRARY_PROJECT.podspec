#
# Be sure to run `pod lib lint SAMPLE_LIBRARY_PROJECT.podspec' to ensure this is a
# valid spec before submitting.
#
# Any lines starting with a # are optional, but their use is encouraged
# To learn more about a Podspec see http://guides.cocoapods.org/syntax/podspec.html
#

Pod::Spec.new do |s|
  s.name             = 'SAMPLE_LIBRARY_PROJECT'
  s.version          = '0.1.0'
  s.summary          = 'SAMPLE_LIBRARY_PROJECT.'

# This description is used to generate tags and improve search results.
#   * Think: What does it do? Why did you write it? What is the focus?
#   * Try to keep it short, snappy and to the point.
#   * Write the description between the DESC delimiters below.
#   * Finally, don't worry about the indent, CocoaPods strips it!

  s.description      = <<-DESC
SAMPLE_LIBRARY_PROJECT is a module for UVT.
                       DESC

  s.homepage         = 'https://gitlab.com/viktyz/SAMPLE_LIBRARY_PROJECT'
  # s.screenshots     = 'www.example.com/screenshots_1', 'www.example.com/screenshots_2'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'viktyz' => '66745628@qq.com' }
  s.source           = { :git => 'https://gitlab.com/viktyz/SAMPLE_LIBRARY_PROJECT.git', :tag => s.version.to_s }
  # s.social_media_url = 'https://twitter.com/<TWITTER_USERNAME>'

  s.ios.deployment_target = '7.0'

  s.source_files = 'SAMPLE_LIBRARY_PROJECT/Classes/**/*'
  
  # s.resource_bundles = {
  #   'SAMPLE_LIBRARY_PROJECT' => ['SAMPLE_LIBRARY_PROJECT/Assets/*.png']
  # }

  s.public_header_files = 'SAMPLE_LIBRARY_PROJECT/Classes/**/*.h'
  s.frameworks = 'UIKit', 'Foundation'
  # s.dependency 'AFNetworking', '~> 2.3'
end
