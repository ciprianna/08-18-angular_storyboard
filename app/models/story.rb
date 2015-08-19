class Story < ActiveRecord::Base
  has_many :comments
  belongs_to :genres

  def as_json(options = {})
    super(options.merge(include: :comments))
  end
end
