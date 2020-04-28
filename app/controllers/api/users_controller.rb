class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)
        if @user.save
            log_in(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user)
        .permit(:first_name, 
                :last_name, 
                :email,
                :password, 
                :phone_number,
                :home_city_id,
                :photo_url
            )
    end
end
