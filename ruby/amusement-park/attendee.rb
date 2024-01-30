class Attendee
  def initialize(height)
    @height = height
    @pass_id = pass_id
  end

  def height
    @height
  end

  def pass_id
    @pass_id
  end

  def issue_pass!(pass_id)
    @pass_id = pass_id
    return @pass_id
  end

  def revoke_pass!
    @pass_id = nil
    return @pass_id
  end
end
