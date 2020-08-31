class Api::MembershipsController < ApplicationController

    def create
        @membership = Membership.new(membership_params)
        if @membership.save
            render json: @membership
        else
            render :json @membership.errors.full_messages, status: 422
        end
    end

    def destroy
        @membership = Membership.find_by(:id params[:id])
        if @membership.destroy
            render json: ["Membership Deleted"], status: 200
        else
            render json: @membership.errors.full_messages, status: 422
        end
    end

    private
    def membership_params
        params.require(:memberships).permit(:user_id, :group_id)
    end
end
