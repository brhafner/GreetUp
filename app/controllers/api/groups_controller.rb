class Api::GroupsController < ApplicationController

    def index
        @groups = Group.all
        render :index
    end

    def show
        @group = Group.find_by(id: params[:id])
        render :show
    end

    def create
        @group = Group.new(group_params)
        @group.organizer_id = current_user.id
        # @group.organizer_id = rand(1...10)
        if @group.save
            render :show
        else
            render json: @group.errors.full_messages, status: 422
        end
    end

    def update
        @group = Group.find_by(id: params[:id])
        if @group.organizer_id != current_user.id
            render json: ["You must be the group organizer to edit this group's info"], status: 422 
        end
        if @group.update(group_params)
            render :show
        else
            render json: @group.errors.full_messages, status: 422 
        end
    end

    def destroy
        @group = Group.find_by(id: params[:id])
        if @group.organizer_id != current_user.id
            render json: ["You must be the group organizer to delete this group"], status: 422 
        end
        if @group.destroy
            render :index
        else
            render json: @group.errors.full_messages, status: 422 
        end
    end

    private
    def group_params
        params.require(:group).permit(:title, :about, :organizer_id, :city_id)
    end
end
