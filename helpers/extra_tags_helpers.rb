module Padrino::Helpers::TagHelpers
  def carousel_tag(items)
    <<start_tag
      <div id="carousel-example" class="carousel slide" data-ride="carousel">
        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          #{render_items(items)}
        </div>
        <a class="left carousel-control" href="#carousel-example" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel-example" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
start_tag
  end

  private

  def render_items(items)
    content = ""
    items.each_with_index do |item, index| 
      content += <<item_tag
        <div class="item #{index.zero? ? 'active' : ''}">
          <img class="img-responsive center-block" src="#{item[:image]}" alt="#{item[:title]}">
          <div class="carousel-caption">
          </div>
        </div>
item_tag
    end
    content
  end
end
