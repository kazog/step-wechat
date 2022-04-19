/**
 * Author: Meng
 * Date: 2022-03
 * Desc: 事件
 */

let EventBus = []; // 事件集合

// 添加事件
function add(key, event) {
  EventBus.push({ key, event, mode: 0 });
}

// 发送事件
function send(key, data) {
  const event = EventBus.filter((e) => e.key == key);
  event.forEach((e) => {
    if (e.event) {
      e.event(data);
    }
  });
  // 移除一次性事件
  EventBus = EventBus.filter((e) => e.key == key && e.mode == 1);
}

// 一次性事件
function oneEvent(key, event) {
  EventBus.push({ key, event, mode: 1 });
}

// 移除事件
function remove(param = { key: "", event: null }) {
  if (param.key) {
    EventBus = EventBus.filter((e) => e.key != param.key);
  } else {
    if (param.event) {
      EventBus = EventBus.filter((e) => e.event != param.event);
    }
  }
}

// 清除事件
function clear() {
  EventBus = [];
}

const Event = {
  add,
  send,
  oneEvent,
  remove,
  clear,
};
export default Event;
