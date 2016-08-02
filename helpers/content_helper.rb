module ContentHelper

  def page_description
    yield_content(:description) || data.config.site_subtitle
  end
end
