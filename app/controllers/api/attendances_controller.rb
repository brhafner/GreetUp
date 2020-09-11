class Api::AttendancesController < ApplicationController
    def create
        debugger
        @attendance = Attendance.new(attendance_params)
        @attendance.user_id = current_user.id
        
        @event = Event.find_by(id: params[:event_id])

        if @attendance.save && !!@event
            # render json: { 
            #     group_id: @event.group_id, 
            #     event_id: @attendance.event_id 
            # }, status: 200
            render json: @event, status: 200
        else
            render :json ['Attendance FAILED'], status: 422
            # render :json @attendance.errors.full_messages, status: 422
        end
    end

    def destroy
        debugger
        @attendance = Attendance.all.where(
            event_id: params[:event_id],
            user_id: current_user.id)

        @event = Event.find_by(id: params[:event_id])

        if @attendance.destroy(@attendance[0].id) && !!@event
            # render json: params[:event_id], status: 200
            render json: @event, status: 200
        else
            render json: @attendance.errors.full_messages, status: 422
        end
    end

    private
    def attendance_params
        # params.require(:attendances).permit(:user_id, :event_id)
        params.permit(:group_id, :event_id)
    end
end
