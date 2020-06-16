Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
<<<<<<< Updated upstream
    resources :messages, only: [:index, :create]
  end
end
=======
    resources :messages, only:[:index, :create]
  end
end
>>>>>>> Stashed changes
