class Api::GroupsController < ApplicationController

    def index
        @groups = Group.all
        render :index
    end

    def show
        @group = Group.find_by(id: params[:id])
        # .with_attached_photos
        render :show
    end

    def create
        @group = Group.new(group_params)
        @group.organizer_id = current_user.id
        @group.city_id = 1
        add_template_photo(@group) unless @group.photo.attached? 
        
        if @group.save
            render :show
        else
            render json: @group.errors.full_messages, status: 422
        end
    end

    def update
        @group = Group.find_by(id: params[:id])
        @group.city_id = 1
        if @group.update(group_params)
            render json: ['true'], status: 200 
        else
            render json: @group.errors.full_messages, status: 422 
        end
    end

    def destroy
        @group = Group.find_by(id: params[:id])
        if @group.destroy
            render json: ["Group Deleted"], status: 200
        else
            render json: @group.errors.full_messages, status: 422 
        end
    end

    private
    def group_params
        params.require(:group).permit(:title, :about, :category, :city_id, :photo)
    end

    def add_template_photo(group)
        file = File.open('app/assets/images/image_icon.png')
        group.photo.attach(io: file, filename: 'image_icon.png')
    end
end

# template image icon credit: https://www.iconfinder.com/Myart
