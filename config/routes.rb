Rails.application.routes.draw do
  root to: 'pages#home'
  get 'about_me', to: 'pages#about_me', as: 'about_me'
  get 'education', to: 'pages#education', as: 'education'
  get 'achievements', to: 'pages#achievements', as: 'achievements'
  get 'contact', to: 'pages#contact', as: 'contact'
end
