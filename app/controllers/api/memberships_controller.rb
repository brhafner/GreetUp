class Api::MembershipsController < ApplicationController

    def create
        @membership = Membership.new(membership_params)
        @membership.user_id = current_user.id
        
        if @membership.save
            render json: @membership.group_id, status: 200
        else
            render :json ['Membership FAILED'], status: 422
            # render :json @membership.errors.full_messages, status: 422
        end
    end

    def destroy
        @membership = Membership.all.where(
            group_id: params[:group_id], 
            user_id: current_user.id)
        
        if Membership.destroy(@membership[0].id)
            # render json: ["Membership Deleted"], status: 200
            render json: params[:group_id], status: 200
        else
            render json: @membership.errors.full_messages, status: 422
        end
    end

    private
    def membership_params
        params.permit(:group_id, :user_id)
    end
end
