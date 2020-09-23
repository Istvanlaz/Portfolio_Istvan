class PagesController < ApplicationController
  def home
  end

  def about_me
  end

  def education
  end

  def achievements
  end

  def contact
  end

  def download
    send_file 'public/Lazar_Istvan.pdf', type: 'pdf', status: 202
  end
end
