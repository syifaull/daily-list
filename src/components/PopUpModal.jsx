import React from "react";

const PopUpModal = (props) => {
  return (
    <>
      <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 h-full">
        <div className="bg-white px-16 py-14 rounded-md text-center">
          <h1
            className="text-xl mb-4 font-bold text-slate-500"
            data-cy="modal-delete-title"
          >
            Do you Want Delete {props.title} ?
          </h1>
          <button
            data-cy="modal-delete-cancel-button"
            className="bg-red-500 px-4 py-2 rounded-md text-md text-white"
            onClick={props.onClickCloseAlert}
          >
            Cancel
          </button>
          <button
            data-cy="modal-delete-confirm-button"
            className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
            onClick={props.onClickDeleteToDo}
          >
            Ok
          </button>
        </div>
      </div>

      {/* <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto">
        <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 class="text-xl font-medium leading-normal text-gray-800">
                Modal title
              </h5>
              <button class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline">
                X
              </button>
            </div>
            <div class="modal-body relative p-4">
              <p>This is a vertically centered modal.</p>
            </div>
            <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">
                Close
              </button>
              <button class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default PopUpModal;
