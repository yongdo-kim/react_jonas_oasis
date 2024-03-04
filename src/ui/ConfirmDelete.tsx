import Button from "./Button";
import Heading from "./Heading";

type ConfirmDeleteProp = {
  disabled: boolean;
  resourceName: string;
  onConfirm: Function;
  onCloseModal: () => void; // 새로운 프로퍼티 추가
};

function ConfirmDelete({
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
}: ConfirmDeleteProp) {
  return (
    <div>
      <Heading style='h3'>Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button
          variations='secondary'
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button
          variations='danger'
          disabled={disabled}
          onClick={() => onConfirm()}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
