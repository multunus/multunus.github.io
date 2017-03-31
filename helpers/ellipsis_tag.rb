module Padrino::Helpers::TagHelpers
  def with_ellipsised_text(tag: 'p', text: '', length: '20', options: {})
    ellipsised_text = text
    if text.length > length
      ellipsised_text = text[0..(length - 1)] + '...'
    end
    "<#{tag} #{options_to_sting(options)}>#{ellipsised_text}</#{tag}>"
  end

  private
  def options_to_sting(options)
    options.reduce(''){|acc, (k,v)| quote= v.is_a?(String) ? '"' : ''; acc + " #{k}=#{quote}#{v}#{quote}"}
  end
end
