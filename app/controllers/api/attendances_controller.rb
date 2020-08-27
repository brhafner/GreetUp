class Api::AttendancesController < ApplicationController
    def create
        @attendance = Attendance.new(attendance_params)
        if @attendance.save
            render json: @attendance
        else
            render :json @attendance.errors.full_messages, status: 422
        end
    end

    def destroy
        @attendance = Attendance.find_by(:id params[:id])
        if @attendance.destroy
            render json: ["Attendance Deleted"], status: 200
        else
            render json: @attendance.errors.full_messages, status: 422
        end
    end

    private
    def attendance_params
        params.require(:attendances).permit(:user_id, :event_id)
    end
end
