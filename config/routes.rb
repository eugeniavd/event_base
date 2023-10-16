Rails.application.routes.draw do
  resources :events, only: [:new, :create]
  get 'atom_feed', to: 'events#atom_feed'
  root 'events#new' 
end  
